import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useMutateAuth } from '../hooks/useMutateAuth';
import { MdBathtub } from "react-icons/md";
import '../App.css';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [accountName, setAccountName] = useState('');
  const [iconImage, setIconImage] = useState('');
  const [preview, setPreview] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { loginMutation, registerMutation } = useMutateAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate({
        email: email,
        password: pw,
      });
    } else {
      await registerMutation
        .mutateAsync({
          email: email,
          password: pw,
          accountName: accountName,
          iconImage: iconImage,
        })
        .then(() =>
          loginMutation.mutate({
            email: email,
            password: pw,
          })
        );
    }
  };

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    setIconImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-grey-600 font-mono">
      <div className="flex items-center">
        <MdBathtub  className="h-8 w-8 mr-2 text-blue-500" />
        <span className="rainbow-text text-center text-3xl font-extrabold">Bath Record</span>
      </div>
      <h2 className="my-6">{isLogin ? 'Login' : 'Create a new account'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="mb-3 px-3 text-sm py-2 border border-grey-300"
            name="email"
            type="email"
            autoFocus
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className="mb-3 px-3 text-sm py-2 border border-grey-300"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
        </div>

        {/* サインアップ時のみ表示 */}
        {!isLogin && (
          <>
            <div>
              <input
                className="mb-3 px-3 text-sm py-2 border border-grey-300"
                name="accountname"
                type="text"
                placeholder="Account Name"
                onChange={(e) => setAccountName(e.target.value)}
                value={accountName}
              />
            </div>
            <div>
            <div className="">icon</div>
              <input
                className="mb-3 px-3 text-sm py-2 border border-grey-300"
                name="icon"
                type="file"
                accept="image/*"
                onChange={handleIconChange}
              />
            </div>
            {preview && (
              <div className="mb-3">
                <img
                  src={preview}
                  alt="Icon Preview"
                  className="h-16 w-16 rounded-full object-cover border"
                />
              </div>
            )}
          </>
        )}

        <div className="flex justify-center my-2">
          <button
            className="disabled:opacity-40 py-2 px-4 rounded text-white bg-indigo-600"
            disabled={!email || !pw || (!isLogin && !accountName)}
            type="submit"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>
      </form>
      <ArrowPathIcon
        onClick={() => setIsLogin(!isLogin)}
        className="h-6 w-6 my-2 text-blue-500 cursor-pointer"
      />
    </div>
  );
};
