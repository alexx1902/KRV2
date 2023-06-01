using DoMain.Models;
using Microsoft.AspNetCore.Mvc;

namespace DoMain.Controllers
{

    [ApiController]
    [Route("DoMain/Cars")]
    public class CarController : ControllerBase

    {
        private readonly string? _dalConnectionString;
        private readonly HttpClient _client;
        public CarController(IConfiguration conf)
        {
            _dalConnectionString = conf.GetValue<string>("dalurl");
            _client = new HttpClient();
        }

        [HttpGet("")]
        public async Task<ActionResult<Car[]>> GetCars()
        {
            var response = await _client.GetAsync($"{_dalConnectionString}/api/Car");
            response.EnsureSuccessStatusCode();
            var result = await response.Content.ReadFromJsonAsync<Car[]>() ?? Array.Empty<Car>();
            return result;
        }
        [HttpDelete("delete")]
        public async Task DeleteCar(int id)
        {
            var response = await _client.DeleteAsync($"{_dalConnectionString}/api/Car/delete/id?id={id}");
            response.EnsureSuccessStatusCode();
            
        }
        [HttpPost("order")]
        public async Task<ActionResult<Car>> PostCar(Car newCar)
        {
            JsonContent content = JsonContent.Create(newCar);
            using var result = await _client.PostAsync($"{_dalConnectionString}/api/Car/add", content);
            var dalCar = await result.Content.ReadFromJsonAsync<Car>();
            //Console.WriteLine($"{dalProduct?.Name}");

            if (dalCar == null) return BadRequest();
            else return dalCar;
        }
    }
}



