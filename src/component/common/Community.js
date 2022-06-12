import React, { useState, useRef, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const dummyText = [
		{
			title: 'Test Title1',
			content: 'Test content1',
		},
		{
			title: 'Test Title2',
			content: 'Test content2',
		},
		{
			title: 'Test Title3',
			content: 'Test content3',
		},
		{
			title: 'Test Title4',
			content: 'Test content4',
		},
	];

	const [Post, setPost] = useState(dummyText);

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const writePost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetPost();
			return alert('제목과 본문을 작성해 주세요');
		}

		setPost([
			{ title: input.current.value, content: textarea.current.value },
			...Post,
		]);

		resetPost();
	};

	const deletePost = (index) => {
		setPost(Post.filter((_, idx) => index !== idx));
	};

	const enableUpdate = (index) => {
		setPost(
			Post.map((el, idx) => {
				if (idx === index) el.enableUpdate = true;
				return el;
			})
		);
	};

	const savePost = (index) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			resetPost();
			return alert('수정할 제목과 본문을 모두 입력하세요');
		}

		setPost(
			Post.map((el, idx) => {
				if (index === idx) {
					el.title = editInput.current.value;
					el.content = editTextarea.current.value;
					el.enableUpdate = false;
				}

				return el;
			})
		);
	};

	const disableUpdate = (index) => {
		setPost(
			Post.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	useEffect(() => {
		console.log(Post);
	}, [Post]);

	return (
		<section className='Community'>
			<div className='community-inner'>
				<div className='community-title'>
					<h2>Community</h2>
				</div>

				<div className='inputBox'>
					<div className='write-box'>
						<input type='text' placeholder='제목을 입력해 주세요' ref={input} />
						<textarea
							cols='30'
							rows='10'
							ref={textarea}
							placeholder='본문을 입력해 주세요'></textarea>
					</div>
					<div className='btns'>
						<button onClick={resetPost}>RESET</button>
						<button onClick={writePost}>WRITE</button>
					</div>
				</div>

				<div className='showBox'>
					{Post.map((el, idx) => {
						return (
							<article key={idx}>
								{el.enableUpdate ? (
									<>
										<div className='edit-mode'>
											<input
												type='text'
												defaultValue={el.title}
												ref={editInput}
											/>
											<textarea
												defaultValue={el.content}
												ref={editTextarea}
												cols='30'
												rows='10'></textarea>
											<div className='btns'>
												<button onClick={savePost}>SAVE</button>
												<button onClick={disableUpdate}>CANCLE</button>
											</div>
										</div>
									</>
								) : (
									<>
										<h3>{el.title}</h3>
										<p>{el.content}</p>
										<div className='btns'>
											<button onClick={() => enableUpdate(idx)}>EDIT</button>
											<button onClick={() => deletePost(idx)}>DELETE</button>
										</div>
									</>
								)}
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Community;
