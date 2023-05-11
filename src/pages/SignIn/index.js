import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //HOC => higher order component
import { Redirect } from "react-router-dom";
import { Button, Card, Container, Input, Alert } from "reactstrap";
import { signIn as actionSignIn } from "../../redux/store/authSlice";

const SignIn = () => {
  const { isLoading, isLogin, error, user } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch(); // api wajib utk keperluuan action state di redux // synchronouse || async
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = ({ target }) => setUsername(target.value);
  const handlePassw = ({ target }) => setPassword(target.value);
  const handleLoginButton = () => {
    dispatch(actionSignIn({ username, password }));
  };

  if (isLoading) return <div>Loading . . . . . .</div>;
  if (user?.id) return <Redirect to={"/home"} />;

  return (
    <>
      <Container>
        <Card style={{ marginTop: "5em", padding: "2em" }}>
          <h4>Log In untuk melanjutkan</h4>
          <Input
            value={username}
            onChange={handleUsername}
            style={{ marginBottom: "2em" }}
            placeholder="username"
          />
          <Input
            value={password}
            onChange={handlePassw}
            style={{ marginBottom: "2em" }}
            placeholder="password"
          />
          <br />

          <Button onClick={handleLoginButton}>Masuk</Button>
        </Card>
      </Container>


      {error && <Alert style={{margin: '2em'}} color="danger">{error.message}</Alert>}
    </>
  );
};

export default SignIn;
