// Manages style for when an item has been selected
const selectedStyle = (selectedId: string | null, propId: string) => {
  return selectedId === propId
    ? "bg-white bg-opacity-20"
    : "hover:bg-white hover:bg-opacity-10";
};

export default selectedStyle;
