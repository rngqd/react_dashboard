import * as React from 'react';
import { Modal, Button } from 'antd';
import style from './index.module.css'
import { IColumns } from '@/models';
// import type { ColumnsType } from 'antd/es/table';

const ModalComponent: React.FC<
    {isOpen: boolean, toggle: ()=> void, columns: IColumns[], changeVisibility: (title:string)=> void}>
    = ({isOpen, toggle, columns, changeVisibility}) => (
    
        <Modal className={style['modal']}
               title="Изменить видимость"
               open={isOpen}
               footer={null}
               onCancel={toggle}>
                    {columns.map(col =>
                    <div key={col.title} className={style['modal__column']}>
                        <p className={style['modal__column-title']}>{col.title}</p>
                        <div className={style['modal__column-visibility']}>
                                {col.hidden ?
                                    <span className={style['modal__column-hidden']}>Скрыта</span> :
                                    <span className={style['modal__column-visible']}>Видима</span>
                                }
                        </div>
                        <Button className={style['modal__column-btn']}
                                onClick={()=> changeVisibility(col.title)}>
                                Изменить видимость
                        </Button>
                    </div>
                    )}
        </Modal>
);

export default ModalComponent;
