import { Kanban } from "../enums/kanban.enum";
import { User } from "./User";
import { Functionality } from "./functionality";



export interface Task {
    ID:string;
      name: string;
      functionality: Functionality;
      kanban: Kanban;
      assignedUser?: User;
    }
