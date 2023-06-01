using DoMain.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoMain.Controllers
{

    [ApiController]
    [Route("DoMain/CarType")]
    public class CarTypeController : ControllerBase

    {
        private readonly string? _dalConnectionString;
        private readonly HttpClient _client;
        public CarTypeController(IConfiguration conf)
        {
            _dalConnectionString = conf.GetValue<string>("dalurl");
            _client = new HttpClient();
        }

        [HttpGet]
        public async Task<ActionResult<CarType[]>> GetCarType()
        {
            var response = await _client.GetAsync($"{_dalConnectionString}/api/CarType");
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadFromJsonAsync<CarType[]>() ?? Array.Empty<CarType>();
            return result;
        }
        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            var response = await _client.DeleteAsync($"{_dalConnectionString}/api/CarType/delete/id?id={id}");
            response.EnsureSuccessStatusCode();
            return NoContent();
        }
        [HttpPut("Update")]
        public async Task PutCarType(int id,CarType newCarType)
        {
            JsonContent content = JsonContent.Create(newCarType);
            var response = await _client.PutAsync($"{_dalConnectionString}/api/CarType/update?id={id}",content);
            response.EnsureSuccessStatusCode();
        }
    }
}