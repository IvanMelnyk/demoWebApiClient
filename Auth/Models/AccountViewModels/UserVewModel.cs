using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiClient.Auth.Models.AccountViewModels
{
    public class UserViewModel
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
		public string LastName { get; set; }
        public bool IsAdmin {set; get;}
    }
}