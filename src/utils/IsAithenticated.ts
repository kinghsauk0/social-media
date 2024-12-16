interface Props {
  bool?: string;
}

export const isAuthenticated = ({bool}:Props) => {
    if(bool){
     return true
    }else{
      return false
    }
  };