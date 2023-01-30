export interface MyState {
    app:{
      currentUser:string | null;
      isAuth: boolean;
      users:Array<string>;
      currentMessage: any;
    }
    
  }