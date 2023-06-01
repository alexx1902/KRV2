using DAL.Models;
namespace DAL.Services.CarTypeService
{
    public interface ICarTypeService
    {
        Task<List<CarType>> GetAllCarType();

        Task<CarType?> GetSingleCarType(int id);

        Task<List<CarType>> AddCarType(CarType oneCarType);

        Task<List<CarType>?> UpdateCarType(int id, CarType request);

        Task<List<CarType>?> DeleteCarType(int id);
    }
}
