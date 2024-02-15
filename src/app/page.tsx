
import { DatesWrapper } from 'app/components/DatesWrapper/DatesWrapper';

import scss from './Home.module.scss';


export default function Home() {
  return (
    <main className={scss.main_layout}>
        <div className={scss.main}>
            <div className={scss.main_title_wrapper}>
                <h1 className={scss.main_title}>Исторические <br/> даты</h1>
            </div>
            <DatesWrapper/>
        </div>
    </main>
  );
}
