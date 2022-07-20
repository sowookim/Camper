import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showSignUpModal, insertText } from '../../Store/ModalSlice';

interface SignUpInfo {
  id: string;
  password: string;
  confirmPassword: string;
  name: string;
  email: string;
  phoneNum: string;
}

const SignUpInput = () => {
  const dispatch = useDispatch();

  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    id:'',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phoneNum: '',
  });

  const [checkState, setCheckState] = useState<boolean>(fasle);
  const [idErr, setIdErr] = useState<string>('hidden');
  const [passwordErr, setPasswordErr] = useState<string>('hidden');
  const [confirmPasswordErr, setConfirmPasswordErr] = useState<string>('hidden');
  const [nameErr, setNameErr] = useState<string>('hidden');
  const [emailErr, setEmailErr] = useState<string>('hidden');
  const [phoneNumErr, setPhoneNumErr] = useState<string>('hidden');

  const { id, password, confirmPassword, name, email, phoneNum }: SignUpInfo = signUpInfo;

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = { ...signUpInfo, [key]: e.target.value };
      setSignUpInfo(next);
      isAllValid(next);
    };

  // 유효성 검사
    const isAllValid = (signUpInfo: SignUpInfo): boolean => {
    const { id, password, confirmPassword, name, email, phoneNum }: SignUpInfo = signUpInfo;
  
    const isIdValid = checkId(id);
    const isPasswordValid = checkPassword(password);
    const isConfirmPasswordValid = checkConfirmPassword(password, confirmPassword);
    const isNameValid = checkName(name);
    const isEmailValid = checkEmail(email);
    const isPhoneNumValid = checkPhoneNum(phoneNum);

    return isIdValid && 
    isPasswordValid && 
    isConfirmPasswordValid && 
    isNameValid && 
    isEmailValid && 
    isPhoneNumValid 
    ? true 
    : false;
  };
  // 빈 값으로 초기화
  const resetInfo = () => {
    setSignUpInfo({
    id:'',
    password: '',
    confirmPassword: '',
    name: '',
    email: '',
    phoneNum: '',
    });
    setIdErr('');
    setPasswordErr('');
    setConfirmPasswordErr('');
    setNameErr('');
    setEmailErr('');
    setPhoneNumErr('');
  };
  // 중복 여부 확인
  const isExist = () => {
    const { id, password, confirmPassword, name, email, phoneNum }: SignUpInfo = signUpInfo;
    
    checkExist(id, '아이디를') &&
    checkExist(password, '비밀번호를') &&
    checkExist(confirmPassword, '비밀번호 확인을') &&
    checkExist(name, '이름을') &&
    checkExist(email, '이메일을') && 
    checkExist(phoneNum, '연락처를')
      ? true
      : false;

    return checkExist;  
  };

  const checkExist = (value: string, input: string): boolean => {
    if (value === '') {
      dispatch(showMiniModal(true));
      dispatch(insertText(input + ' 입력해주세요'));
      return false;
    }
    return true;
  };
}
