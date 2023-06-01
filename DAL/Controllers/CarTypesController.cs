using DAL.Services.CarService;
using DAL.Services.CarTypeService;
using Microsoft.AspNetCore.Mvc;

namespace DAL.Controllers
{

    [ApiController]
    [Route("api/CarType")]
   
    public class CarTypeController : ControllerBase
    {
        private readonly ICarTypeService _carTypeService;
        public CarTypeController(ICarTypeService carTypeService)
        {
            _carTypeService = carTypeService;
        }

        [HttpGet]
        public async Task<ActionResult<List<CarType>>> GetAllCarType()
        {
            return await _carTypeService.GetAllCarType();
        }

        [HttpGet("(id)")]
        public async Task<ActionResult<CarType>> GetSingleCarType(int id)
        {
            var result = await _carTypeService.GetSingleCarType(id);
            if (result is null)
                return NotFound("Not found");

            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<List<CarType>>> AddCarType(CarType oneCarType)
        {
            var result = await _carTypeService.AddCarType(oneCarType);
            return Ok(result);
        }

        [HttpPut("update")]
        public async Task<ActionResult<List<CarType>>> UpdateCarType(int id, CarType request)
        {
            var result = await _carTypeService.UpdateCarType(id, request);
            if (result is null)
                return NotFound("Sorry");

            return Ok(result);
        }

        [HttpDelete("delete/id")]
        public async Task<ActionResult<List<CarType>>> DeleteCarType(int id)
        {
            var result = await _carTypeService.DeleteCarType(id);
            if (result is null)
                return NotFound("Sorry");

            return Ok(result);
        }

    }
}
