import {
  AirCondition,
  Bathroom,
  CategoryListHorizontal,
  Decors,
  Doors,
  Gypsum,
  Insulation,
  Nwafez,
  Paints,
  Panels,
  Parkeh,
  Porsalen,
  Rkham,
  Siramik,
  Stone,
  Switches,
} from "..";

interface Props {
  id: number;
}

const SubCategoriesUnderCategory = ({ id }: Props) => {
  switch (id) {
    case 1:
      return <Rkham />;
    case 2:
      return <Porsalen />;
    case 3:
      return <Siramik />;
    case 4:
      return <Parkeh />;
    case 5:
      return <Nwafez />;
    case 6:
      return <Decors />;
    case 7:
      return <Doors />;
    case 8:
      return <Panels />;
    case 9:
      return <Gypsum />;
    case 10:
      return <Stone />;
    case 11:
      return <Paints />;
    case 12:
      return <Insulation />;
    // case 13:
    //   return <Edoors />;
    case 14:
      return <Switches />;
    case 15:
      return <Bathroom />;
    case 16:
      return <AirCondition />;
    // case 17:
    //   return <Gypsum />;
    default:
      return <CategoryListHorizontal />;
  }
};

export default SubCategoriesUnderCategory;
