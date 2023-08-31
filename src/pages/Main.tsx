import React, { ChangeEvent, useState } from 'react';

export default function Main() {
  const [values, setValues] = useState({ owner: '', repo: '' });

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <input type='text' placeholder='organization' name='owner' onChange={setInputValue} />
      <input type='text' placeholder='repository' name='repo' onChange={setInputValue} />

      {/* <Button
        buttonContent={status === STATUS.LOADING ? <Spinner type='button' /> : '이슈 보러가기'}
        type='primary'
        onClick={validateRepo}
      /> */}

      <button type='button'>Default Repo로 가기~! ^_^</button>
    </div>
  );
}

// export default function Main() {
//   const navigate = useNavigate();
//   const { data, status, requestOctokit } = useOctokit<IRepoResponse>();
//   const { setRepoInfo } = useRepoContext();
//   const [values, setValues] = useState({ owner: '', repo: '' });

//   const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });
//   };

//   const validateRepo = () => {
//     requestOctokit({
//       endpoint: `GET /repos/${values.owner}/${values.repo}`,
//       body: {
//         owner: values.owner,
//         repo: values.repo,
//         headers: {
//           'X-GitHub-Api-Version': '2022-11-28',
//         },
//       },
//       isGetData: true,
//     });
//   };

//   useEffect(() => {
//     if (data && status === STATUS.SUCCESS) {
//       setRepoInfo({
//         owner: data.owner.login,
//         repo: data.name,
//       });
//       navigate(URL.Issues);
//     }
//   }, [data, status]);

//   return (
//     <Layout title='Issues'>
//       <S.MainBox>
//         <input type='text' placeholder='organization' name='owner' onChange={setInputValue} />
//         <input type='text' placeholder='repository' name='repo' onChange={setInputValue} />
//         <Button
//           buttonContent={status === STATUS.LOADING ? <Spinner type='button' /> : '이슈 보러가기'}
//           type='primary'
//           onClick={validateRepo}
//         />
//         {status === STATUS.ERROR && <S.AlertNotice>존재하지 않는 레포지토리입니다.</S.AlertNotice>}
//       </S.MainBox>
//     </Layout>
//   );
// }
