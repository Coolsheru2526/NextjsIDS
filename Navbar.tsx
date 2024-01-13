import React, { useState } from "react";
import { Search, Menu, X ,MoveRight} from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="lg:hidden fixed top-4 right-4">
        <button onClick={toggleMenu}>
          {!isMenuOpen ? <Menu size={20} /> : null}
        </button>
      </div>
      <Menubar className="hidden lg:flex bg-black shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 h-15 justify-around rounded-2xl text-2xl w-2/3">
        <MenubarMenu>
          <MenubarTrigger className="hover:backdrop-filter hover:backdrop-blur-xl  hover:rounded-lg ">
            HOME
          </MenubarTrigger>
          <MenubarTrigger className="hover:backdrop-filter hover:backdrop-blur-xl">
            ABOUT US
          </MenubarTrigger>
          <MenubarTrigger className="hover:backdrop-filter hover:backdrop-blur-xl  ">
            SUPPORT US
          </MenubarTrigger>
          <MenubarTrigger>
            <div className="hover:backdrop-filter hover:backdrop-blur-xl ">
              <Search />
            </div>
          </MenubarTrigger>
          <MenubarTrigger>
            <Button className="hover:backdrop-filter hover:backdrop-blur-xl">
              <MoveRight className=" mr-2 h-4 w-4" /> MENU
            </Button>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      {isMenuOpen && (
        <>
          <div className="lg:hidden fixed top-0 w-full flex flex-col bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 p-4">
            <div className="flex hover:backdrop-filter hover:backdrop-blur-xl mb-2 cursor-pointer justify-center">
              HOME
            </div>
            <div className="flex hover:backdrop-filter hover:backdrop-blur-xl mb-2 cursor-pointer justify-center">
              ABOUT US
            </div>
            <div className="flex hover:backdrop-filter hover:backdrop-blur-xl mb-2 cursor-pointer justify-center">
              SUPPORT US
            </div>
            <div className="flex hover:backdrop-filter hover:backdrop-blur-xl justify-center">
              <Search />
            </div>
          </div>
          <div>
            <X onClick={toggleMenu} className="fixed top-4 right-4" size={20} />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
