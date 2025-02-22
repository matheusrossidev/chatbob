import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { versionSystem } from "../../../package.json";
import { i18n } from "../../translate/i18n";
import { nomeEmpresa } from "../../../package.json";
import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png";
import loginImage from "../../assets/loginImage.png"; // Supondo que você tenha uma imagem para o lado esquerdo

const Copyright = () => {
	return (
		<Typography variant="body2" color="primary" align="center">
			{"Copyright "}
			<Link color="primary" href="#">
				{nomeEmpresa} - v {versionSystem}
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		width: "100vw",
		height: "100vh",
		display: "flex",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	leftSide: {
		width: "50%",
		height: "100%",
		backgroundImage: `url(${loginImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	rightSide: {
		width: "50%",
		height: "100%",
		backgroundColor: "#ffffff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: "100%",
		},
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "55px 30px",
		borderRadius: "12.5px",
		backgroundColor: "#ffffff",
		//boxShadow: theme.shadows[5],
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	powered: {
		color: "white",
	},
}));

const Login = () => {
	const classes = useStyles();

	const [user, setUser] = useState({ email: "", password: "" });

	const { handleLogin } = useContext(AuthContext);

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlSubmit = e => {
		e.preventDefault();
		handleLogin(user);
	};

	return (
		<div className={classes.root}>
			<div className={classes.leftSide}></div>
			<div className={classes.rightSide}>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<div className={classes.paper}>
						<div>
							<img style={{ margin: "0 auto", width: "70%" }} src={logo} alt="Whats" />
						</div>
						{/*<Typography component="h1" variant="h5">
							{i18n.t("login.title")}
						</Typography>*/}
						<form className={classes.form} noValidate onSubmit={handlSubmit}>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label={i18n.t("login.form.email")}
								name="email"
								value={user.email}
								onChange={handleChangeInput}
								autoComplete="email"
								autoFocus
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label={i18n.t("login.form.password")}
								type="password"
								id="password"
								value={user.password}
								onChange={handleChangeInput}
								autoComplete="current-password"
							/>
							
							{/* <Grid container justify="flex-end">
								<Grid item xs={6} style={{ textAlign: "right" }}>
									<Link component={RouterLink} to="/forgetpsw" variant="body2">
										Esqueceu sua senha?
									</Link>
								</Grid>
							</Grid>*/}
							
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								{i18n.t("login.buttons.submit")}
							</Button>
							{ <Grid container>
								<Grid item>
									<Link
										href="#"
										variant="body2"
										component={RouterLink}
										to="/signup"
									>
										{i18n.t("login.buttons.register")}
									</Link>
								</Grid>
							</Grid> }
						</form>
					
					</div>
					{/* <Box mt={8}><Copyright /></Box>*/}
				</Container>
			</div>
		</div>
	);
};

export default Login;
