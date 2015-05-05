using System.Net;
using System.Threading.Tasks;

namespace Demo.Languages.Csharp.AsyncAwait.Console
{
	public class Program
	{
		public static void Main(string[] args)
		{
			const string uri = "http://www.google.com";
			var textTask = GetTextTask(uri);
			System.Console.WriteLine(textTask.Result);
		}

		private async static Task<string> GetTextTask(string uri)
		{
			var client = new WebClient();
			string data = await client.DownloadStringTaskAsync(uri);
			System.Console.WriteLine("---------------------------------------------------");
			return data;
		}
	}
}
