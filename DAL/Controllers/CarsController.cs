using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL.Models;
using DAL.Services.CarService;
namespace DAL.Controllers
{
    namespace DAL.Controllers
    {
        [Route("api/Car")]
        [ApiController]
        public class CarController : ControllerBase
        {
            private readonly ICarService _carService;
            public CarController(ICarService carService)
            {
                _carService = carService;
            }

            [HttpGet]
            public async Task<ActionResult<List<Car>>> GetAllCar()
            {
                return await _carService.GetAllCar();
            }

            [HttpGet("(id)")]
            public async Task<ActionResult<Car>> GetSingleCar(int id)
            {
                var result = await _carService.GetSingleCar(id);
                if (result is null)
                    return NotFound("Not found");

                return Ok(result);
            }

            [HttpPost("add")]
            public async Task<ActionResult<List<Car>>> AddCar(Car oneCar)
            {
                var result = await _carService.AddCar(oneCar);
                return Ok(result);
            }

            [HttpPut("update/id")]
            public async Task<ActionResult<List<Car>>> UpdateCar(int id, Car request)
            {
                var result = await _carService.UpdateCar(id, request);
                if (result is null)
                    return NotFound("Sorry");

                return Ok(result);
            }

            [HttpDelete("delete/{id}")]
            public async Task<ActionResult<List<Car>>> DeleteCar(int id)
            {
                var result = await _carService.DeleteCar(id);
                if (result is null)
                    return NotFound("Sorry");

                return Ok(result);
            }

        }
    }
}