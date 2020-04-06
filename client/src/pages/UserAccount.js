import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import { Grid } from '@material-ui/core';
import UserAccountHeader from '../components/UserAccountHeader';
import { useStoreContext } from "../utils/GlobalState";
import API from '../utils/API';
import { useAuth0 } from '../utils/auth0context';


export default function UserAccount(){

  const {user} = useAuth0();
  const [state, dispatch] = useStoreContext();

      //   if (isUser.Transactions) {
      //   for (let transaction of isUser.Transactions) {
      //     console.log(JSON.stringify(transaction).split(":")[0].slice(2, 28));
      //   }
      // }

    let transactions = null;

    useEffect(() => {

      if (!user) {
        console.log("no user")
        return;
      } else {
        console.log("user present")
        checkUser(user.email)
      }
      
      function checkUser(email) {
        API.getUsers().then(res => {
          const isUser = res.data.find(({ Email }) => Email === email)
        //   if (isUser.Transactions) {
        //   for (let transaction of isUser.Transactions) {
        //     console.log(JSON.stringify(transaction).split(":")[0].slice(2, 28));
        //   }
        // }
          if (!isUser) {
            API.saveUsers({ Email: email })
            .then(res =>           
              dispatch({
              type: "SET_USER",
              user: {
                id: res.data._id,
                email: res.data.Email,
                transactions: res.data.Transactions
              }
            }))
          } else {
            dispatch({
              type: "SET_USER",
              user: {
                id: isUser._id,
                email: isUser.Email,
                transactions: isUser.Transactions
              }
            })

          }
        });
      };


      // transactions = state.currentUser.transactions.map(transaction => {
      //   return(
      //     <h2>{transaction.transactionID}</h2>
      
      // )})
  
   
    }, [user])

    return(
       <div>
          <Navbar/>
          <UserAccountHeader/>



          <h1>{state.currentUser.id}</h1><br/>
          <h1>{state.currentUser.email}</h1>
          {transactions}
          {/* <Grid container direction="row">
          <Grid item xs={2} />
          <Grid item container direction="row" xs={8}>
          <Grid item xs={2} />
          </Grid>
          </Grid> */}



        </div>
    )}