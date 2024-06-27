import { FC } from 'react';
import './MyButton';
export interface MyButtonProps {
    children: any;
    color: string;
    big?: boolean;
}
declare const MyButton: FC<MyButtonProps>;
export default MyButton;
