import { Cell } from "./../Cell";
import { Colors } from "./../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const dy = Math.abs(target.y - this.cell.y)
    const dx = Math.abs(target.x - this.cell.x)
    if ((dx <= 1 && dy <= 1)) return true
    return false;
  }

  isKingUnderAttack(cell: Cell): boolean {
    
    return false 
  }
}
