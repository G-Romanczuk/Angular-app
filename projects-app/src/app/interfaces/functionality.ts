import { Kanban } from "../enums/kanban.enum";
import { User } from "./User";
import { Project } from "./Project";

export interface Functionality {
    ID:string;
      name: string;
      description: string;
      project: Project; 
      owner : User;
      kanban: Kanban;
    }