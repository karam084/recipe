using AutoMapper;
//using AutoMapper.Execution;
using RecipeBackEnd.Core.Models;

namespace RecipeBackEnd.APIs.Dto.Helpers
{
    public class RecipePictureUrlResolver : IValueResolver<Recipe, RecipeToReturnDto, string>
    {
        private readonly IConfiguration _configuration;

        public RecipePictureUrlResolver(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string Resolve(Recipe source, RecipeToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.Image))
                return $"{_configuration["ApiBaseUrlDynamic"]}{source.Image}";
            return string.Empty;
        }
    }
}
