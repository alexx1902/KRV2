

namespace DAL.Services.CarTypeService
{
    
    
        public class CarTypeService : ICarTypeService
        {

            private readonly DataContext _context;

            public CarTypeService(DataContext context)
            {
                _context = context;
            }
            public async Task<List<CarType>> AddCarType(CarType oneCarType)
            {
                _context.CarType.Add(oneCarType);

                await _context.SaveChangesAsync();

                return await _context.CarType.ToListAsync();
            }

            public async Task<List<CarType>?> DeleteCarType(int id)
            {
                var oneCarType = await _context.CarType.FindAsync(id);
                if (oneCarType is null)
                    return null;

                _context.CarType.Remove(oneCarType);

                await _context.SaveChangesAsync();


                return await _context.CarType.ToListAsync();
            }

            public async Task<List<CarType>> GetAllCarType()
            {
                var CarTypes = await _context.CarType.ToListAsync();
                return CarTypes;
            }

            public async Task<CarType?> GetSingleCarType(int id)
            {
                var oneCarType = await _context.CarType.FindAsync(id);
                if (oneCarType is null)
                    return null;
                return oneCarType;
            }

            public async Task<List<CarType>?> UpdateCarType(int id, CarType request)
            {
                var oneCarType = await _context.CarType.FindAsync(id);
                if (oneCarType is null)
                    return null;

                oneCarType.TypeName = request.TypeName;
                

                await _context.SaveChangesAsync();

                return await _context.CarType.ToListAsync();
            }
        }
}
