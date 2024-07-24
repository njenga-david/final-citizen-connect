import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { addUser, IUser, LogInRequest, LogInResponse, OfficalApprovedResponse, RegisterResponse, UserDeleteResponse, UserUpdateResponse } from "../../Models-Angular/User";

export const AuthActions = createActionGroup({
    source: 'AUTH API',
    events: {
        //login in actions
        'login': props<{ user: LogInRequest }>(),
        'login success': props<{ response: LogInResponse }>(),
        'login failure': props<{ message: string }>(),

        //register up actions
        'register': props<{ user: addUser }>(),
        'register success': props<{ response: RegisterResponse }>(),
        'register failure': props<{ message: string }>(),

        //getting users
        'get': emptyProps(),
        'get success': props<{ allUsers: IUser[] }>(),
        'get failure': props<{ message: string }>(),

        //get single user
        'get specificUser': props<{ id: string }>(),
        'get specificUser success': props<{ user: IUser }>(),
        'get specificUser failure': props<{ message: string }>(),


        //updating user
        'update User': props<{ updatedUser: addUser, id: string }>(),
        'update User success': props<{ response: UserUpdateResponse }>(),
        'update User failure': props<{ message: string }>(),


        //deleting user
        'delete User': props<{ id: string }>(),
        'delete User success': props<{ response: UserDeleteResponse }>(),
        'delete User failure': props<{ message: string }>(),


        //approving official 
        'approve Offical': props<{ id: string }>(),
        'approve Offical success': props<{ response: OfficalApprovedResponse }>(),
        'approve Offical failure': props<{ message: string }>(),

    }
})
