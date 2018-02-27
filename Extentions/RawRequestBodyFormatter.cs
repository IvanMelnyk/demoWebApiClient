using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace WebApiClient.Extentions
{

	/// <summary>
	/// Formatter that allows content of type text/plain and application/octet stream
	/// or no content type to be parsed to raw data. Allows for a single input parameter
	/// in the form of:
	/// 
	/// public string RawString([FromBody] string data)
	/// public byte[] RawData([FromBody] byte[] data)
	/// </summary>
	public class RawRequestBodyFormatter : InputFormatter
	{
		public RawRequestBodyFormatter()
		{
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/plain"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/x-www-form-urlencoded"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/json"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/octet-stream"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/arraybuffer"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/x-binary"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/protobuf"));
			SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/x-protobuf"));
		}


		/// <summary>
		/// Allow text/plain, application/octet-stream and no content type to
		/// be processed
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		public override Boolean CanRead(InputFormatterContext context)
		{
			if (context == null) throw new ArgumentNullException(nameof(context));

			var contentType = context.HttpContext.Request.ContentType;
			if (string.IsNullOrEmpty(contentType) || 
				contentType == "text/plain" ||
				contentType == "application/json" ||
				contentType == "application/octet-stream" ||
				contentType == "arraybuffer" ||
				contentType == "application/x-binary" ||
				contentType == "application/protobuf")
				return true;

			return false;
		}

		/// <summary>
		/// Handle text/plain or no content type for string results
		/// Handle application/octet-stream for byte[] results
		/// </summary>
		/// <param name="context"></param>
		/// <returns></returns>
		public override async Task<InputFormatterResult> ReadRequestBodyAsync(InputFormatterContext context)
		{
			var request = context.HttpContext.Request;
			var contentType = context.HttpContext.Request.ContentType;

			if (string.IsNullOrEmpty(contentType) ||
			 contentType == "text/plain" ||
			 contentType == "application/json" ||
			 contentType == "application/x-www-form-urlencoded")
			{
				using (var reader = new StreamReader(request.Body))
				{
					var content = await reader.ReadToEndAsync();
					return await InputFormatterResult.SuccessAsync(content);
				}
			}
			if (contentType == "application/octet-stream" ||
				contentType == "arraybuffer" ||
				contentType == "application/x-binary" ||
				contentType == "application/protobuf")
			{
				using (var ms = new MemoryStream(2048))
				{
					await request.Body.CopyToAsync(ms);
					var content = ms.ToArray();
					return await InputFormatterResult.SuccessAsync(content);
				}
			}

			return await InputFormatterResult.FailureAsync();
		}
	}
}