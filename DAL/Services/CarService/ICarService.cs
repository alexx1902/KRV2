using DAL.Models;

namespace DAL.Services.CarService
{
    public interface ICarService
    {
        Task<List<Car>> GetAllCar();

        Task<Car?> GetSingleCar(int id);

        Task<List<Car>> AddCar(Car oneCar);

        Task<List<Car>?> UpdateCar(int id, Car request);

        Task<List<Car>?> DeleteCar(int id);
    }
}