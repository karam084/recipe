using AutoMapper;
using RecipeBackEnd.Core.Models;
namespace RecipeBackEnd.APIs.Dto.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
             CreateMap<Recipe, RecipeToReturnDto>()
             .ForMember(d => d.Image, O => O.MapFrom<RecipePictureUrlResolver>());
        }
    }
}
