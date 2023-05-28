import { StudentState } from "./types";

/*
const initialState = {
    students: string[]
};
*/
const initialState = {
    students: ["François", "Vincent", "Roger"]
};

interface Action {
    type:string,
    playload: string
}

export function studentReducer (state = initialState, action: Action):StudentState {
    switch (action.type) {
        case "ADD":
            let newStudents: string[] = state.students;
            newStudents.unshift(action.playload);
            return {
                ...state,
                students: newStudents
            };
        case "MODIFY":
            let obj:any = JSON.parse(action.playload);
            state.students[obj["key"]] = obj["value"];
            return {
                ...state,
                students: state.students
            };
        case "DELETE":
            state.students.splice(parseInt(action.playload), 1);
            return {
                ...state,
                students: state.students
            };
        default:
            return state;
    }
}
