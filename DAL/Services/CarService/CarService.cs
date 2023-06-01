using DAL.Data;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Services.CarService
{

    public class CarService : ICarService
        {

            private readonly DataContext _context;

            public CarService(DataContext context)
            {
                _context = context;
            }
            public async Task<List<Car>> AddCar(Car oneCar)
            {
                _context.Car.Add(oneCar);

                await _context.SaveChangesAsync();

                return await _context.Car.ToListAsync();
            }

            public async Task<List<Car>?> DeleteCar(int id)
            {
                var oneCar = await _context.Car.FindAsync(id);
                if (oneCar is null)
                    return null;

                _context.Car.Remove(oneCar);

                await _context.SaveChangesAsync();


                return await _context.Car.ToListAsync();
            }

            public async Task<List<Car>> GetAllCar()
            {
                var Cars = await _context.Car.ToListAsync();
                return Cars;
            }

            public async Task<Car?> GetSingleCar(int id)
            {
                var oneCar = await _context.Car.FindAsync(id);
                if (oneCar is null)
                    return null;
                return oneCar;
            }

            public async Task<List<Car>?> UpdateCar(int id, Car request)
            {
                var oneCar = await _context.Car.FindAsync(id);
                if (oneCar is null)
                    return null;

                oneCar.CarName = request.CarName;
                oneCar.Type = request.Type;
                oneCar.DOJ = request.DOJ;
                oneCar.Year = request.Year;

                await _context.SaveChangesAsync();

                return await _context.Car.ToListAsync();
            }

            
        }
    }

