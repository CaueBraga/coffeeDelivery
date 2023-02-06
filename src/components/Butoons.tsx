import { ShoppingCart } from "phosphor-react";
export function Buttons() {
  return (
    <div className="flex items-center">
      <div className=" mr-4 flex items-center justify-between text-xl text-purple-300 bg-base-700 p-2 w-16 h-9 rounded-md">
        <button> - </button>
        <div> 1 </div>
        <button> + </button>
      </div>
      <div className="p-2 bg-purple-300 rounded">
        <ShoppingCart size={20} weight="fill" color="white" />
      </div>
    </div>
  );
}
