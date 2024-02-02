import * as cat from ".";

function RenderCat({ n }) {
  const catComp = {
    0: cat.SmileCat,
    1: cat.ConfusedCat,
    2: cat.PokerfaceCat,
    3: cat.EyerollCat,
    4: cat.TantrumCat,
    5: cat.AnxiousCat,
    6: cat.SadCat,
    7: cat.PoutingCat,
    8: cat.AngryCat,
    9: cat.AngryCat,
  };

  const CatComponent = catComp[n];

  return <>{CatComponent && <CatComponent />}</>;
}

export default RenderCat;
