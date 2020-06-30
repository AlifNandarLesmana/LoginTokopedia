import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-white static-top">
			<div className="container">
				<a className="navbar-brand text-dark" href="#">
					tokopedia
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<button
								type="button"
								class="btn btn-outline-success"
								style={{ border: "1px solid green" }}
								data-toggle="modal"
								data-target="#exampleModal"
							>
								Masuk
							</button>

							<div
								class="modal fade"
								id="exampleModal"
								tabindex="-1"
								role="dialog"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog modal-dialog-centered">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLabel">
												Masuk
											</h5>
											<button
												type="button"
												class="close"
												data-dismiss="modal"
												aria-label="Close"
											>
												<span aria-hidden="true">&times;</span>
											</button>
										</div>

										<div class="modal-body">
											<form>
												<div class="form-group">
													<label for="nohp&email">
														Nomor Ponsel atau Email
													</label>
													<input
														type="text"
														class="form-control"
														id="nohp&email"
													/>
													<small
														id="passwordHelpBlock"
														class="form-text text-muted"
													>
														Contoh: email@tokopedia.com
													</small>
												</div>
												<a
													href="#"
													className="nav-link text-success"
													style={{ marginLeft: "330px" }}
												>
													Lupa kata sandi?
												</a>
												<button type="submit" class="btn btn-block" disabled>
													Selanjutnya
												</button>
											</form>
										</div>
										<div class="modal-footer"></div>
									</div>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<a className="btn btn-success ml-3" href="#">
								Daftar
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
