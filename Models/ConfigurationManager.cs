using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Grpc.Core;
using Newtonsoft.Json;
namespace WebApiClient.Models
{
	/// -------------------------------------------------------------------------------------------------
	/// ConfigurationManager
	/// -------------------------------------------------------------------------------------------------
	public class ConfigurationManager
	{
		public ChannelOption[] GrpcChannelOptions { set; get; }
		public Configuration config { set; get; }
		/// ---------------------------------------------------------------------------------------------
		public ConfigurationManager()
		{
			this.GrpcChannelOptions = new ChannelOption[]
			{
				new ChannelOption(ChannelOptions.MaxConcurrentStreams, 256),
				new ChannelOption(ChannelOptions.MaxSendMessageLength, 1024 * 1024 * 256),
				new ChannelOption(ChannelOptions.MaxReceiveMessageLength, 1024 * 1024 * 256)
			};
		}

		/// ---------------------------------------------------------------------------------------------
		public void ParsConfigeFile(string filePath)
		{
			try
			{
				var lines = File.ReadAllLines(filePath);
				PropertyInfo[] properties = this.GetType().GetProperties();
				string[] parts = null;
				IEnumerable<ConnectionPropertyAttribute> attributes = null;
				bool goodProperty = false;

				foreach (string line in lines)
				{
					parts = line.Replace("\t", "").Replace(" ", "").Split('=');
					if (parts.Length != 2) continue;

					goodProperty = false;
					foreach (PropertyInfo pi in properties)
					{
						attributes = pi.GetCustomAttributes<ConnectionPropertyAttribute>();
						if (attributes == null) continue;
						foreach (ConnectionPropertyAttribute cpa in attributes)
						{
							if (cpa.PropertyName != parts[0]) continue;
							goodProperty = true;
							break;
						}
						if (!goodProperty) continue;
						pi.SetValue(this, parts[1]);
						break;
					}
				}
			}
			catch (Exception e)
			{
				Console.WriteLine($"Apigate initialization from file: {e.Message}");
			}
		}

		/// ---------------------------------------------------------------------------------------------
		public void GetConfiguration(string filePath) {
			if (File.Exists(filePath)) {
				try
				{
					this.config = JsonConvert.DeserializeObject<Configuration>(File.ReadAllText(filePath));
				}
				catch(Exception e) {
					Console.WriteLine($"Error occured on parse configuration file! App will not work properly! Exception: {e.Message}");
				}
			} 
			else {
				Console.WriteLine("No configuration found! App will not work properly!");
			}
		}
	}


	/// -------------------------------------------------------------------------------------------------
	/// ConnectionPropertyAttribute
	/// -------------------------------------------------------------------------------------------------
	public class ConnectionPropertyAttribute : Attribute
	{
		public string PropertyName { get; private set; }

		/// ---------------------------------------------------------------------------------------------
		public ConnectionPropertyAttribute(string propertyName)
		{
			this.PropertyName = propertyName;
		}

	}


	public class Configuration
	{
		public string NpgsqlConnection { set; get; }
		public string serviceAddressDev { set; get; }
	}

}