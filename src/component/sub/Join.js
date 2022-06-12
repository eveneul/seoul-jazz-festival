import React, { useState, useEffect } from 'react';
import SubLayout from '../common/SubLayout';

function Join() {
	const userVal = {
		userId: '',
		email: '',
		password1: '',
		password2: '',
		name: '',
		gender: null,
		funnels: null,
		comment: '',
	};

	const [Val, setVal] = useState(userVal);
	const [Err, setErr] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const check = (Val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[`~!@#$%^&*()_+-=]/;

		if (Val.userId.length < 5) {
			errs.userId = '아이디를 4글자 이상 입력해 주세요';
		}

		if (Val.email.length < 8 || !/@/.test(Val.email)) {
			errs.email = '이메일을 골뱅이(@)를 포함하여 8글자 이상 입력해 주세요';
		}

		if (
			Val.password1.length < 8 ||
			!eng.test(Val.password1) ||
			!num.test(Val.password1) ||
			!spc.test(Val.password1)
		) {
			errs.password1 =
				'비밀번호를 숫자, 영문자, 특수문자를 포함해 8글자 이상 입력해 주세요';
		}

		if (Val.password1 !== Val.password2 || !Val.password2) {
			errs.password2 = '비밀번호를 동일하게 재입력해 주세요';
		}

		if (!Val.name) {
			errs.name = '이름을 입력해 주세요';
		}

		if (!Val.gender) {
			errs.gender = '성별을 선택해 주세요';
		}

		if (!Val.funnels) {
			errs.funnels = '유입경로를 한 개 이상 선택해 주세요';
		}

		if (Val.comment.length < 20) {
			errs.comment = '코멘트를 20글자 이상 입력해 주세요';
		}

		return errs;
	};

	const handleGender = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el, idx) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...Val, [name]: isCheck });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	return (
		<SubLayout name={'Join'} color={'#0066ff'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='sr-only'></legend>
					<table border='1'>
						<caption className='sr-only'></caption>
						<tbody>
							{/* Id 인증처리 */}
							<tr>
								<th scope='row'>
									<label htmlFor='userId'>ID</label>
								</th>
								<td>
									<input
										type='text'
										name='userId'
										id='userId'
										placeholder='아이디를 입력해 주세요'
										value={Val.userId}
										onChange={handleChange}
									/>
									<span>{Err.userId}</span>
								</td>
							</tr>
							{/* 비밀번호 인증처리 */}
							<tr>
								<th scope='row'>
									<label htmlFor='password1'>password</label>
								</th>
								<td>
									<input
										type='password'
										name='password1'
										id='password1'
										placeholder='비밀번호를 입력해 주세요'
										value={Val.password1}
										onChange={handleChange}
									/>
									<span>{Err.password1}</span>
								</td>
							</tr>
							{/* 비밀번호 재인증처리 */}
							<tr>
								<th scope='row'>
									<label htmlFor='password2'>re password</label>
								</th>
								<td>
									<input
										type='password'
										name='password2'
										id='password2'
										placeholder='비밀번호를 재입력해 주세요'
										value={Val.password2}
										onChange={handleChange}
									/>
									<span>{Err.password2}</span>
								</td>
							</tr>
							{/* email 인증처리 */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-Mail</label>
								</th>
								<td>
									<input
										type='text'
										name='email'
										id='email'
										placeholder='이메일을 입력해 주세요'
										value={Val.email}
										onChange={handleChange}
									/>
									<span>{Err.email}</span>
								</td>
							</tr>
							{/* 이름 */}
							<tr>
								<th scope='row'>
									<label htmlFor='name'>name</label>
								</th>
								<td>
									<input
										type='text'
										name='name'
										id='name'
										placeholder='이름을 입력해 주세요'
										value={Val.name}
										onChange={handleChange}
									/>
									<span>{Err.name}</span>
								</td>
							</tr>
							{/* 성별 */}
							<tr>
								<th scope='row'>Gender</th>
								<td>
									<label htmlFor='male'>Male</label>
									<input
										type='radio'
										id='male'
										name='gender'
										onChange={handleGender}
									/>
									<label htmlFor='female'>Female</label>
									<input
										type='radio'
										id='female'
										name='gender'
										onChange={handleGender}
									/>
									<span>{Err.gender}</span>
								</td>
							</tr>
							{/* 유입경로 */}
							<tr>
								<th scope='row'>유입경로</th>
								<td>
									<label htmlFor='sns'>SNS</label>
									<input
										type='checkbox'
										id='sns'
										name='funnels'
										onChange={handleCheck}
									/>
									<label htmlFor='ad'>광고</label>
									<input
										type='checkbox'
										id='ad'
										name='funnels'
										onChange={handleCheck}
									/>
									<label htmlFor='search'>검색</label>
									<input
										type='checkbox'
										id='search'
										name='funnels'
										onChange={handleCheck}
									/>
									<span>{Err.funnels}</span>
								</td>
							</tr>
							{/* 코멘트 */}
							<tr>
								<th scope='row'>
									<label htmlFor='comment'>Comment</label>
								</th>
								<td>
									<textarea
										name='comment'
										id='comment'
										value={Val.comment}
										cols='30'
										rows='10'
										placeholder='코멘트를 입력해 주세요'
										onChange={handleChange}></textarea>
									<span>{Err.comment}</span>
								</td>
							</tr>
							<tr>
								<th col='2'>
									<input type='reset' value='RESET' />
									<input type='submit' value='SUBMIT' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</SubLayout>
	);
}

export default Join;
