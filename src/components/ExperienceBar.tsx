import style from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {


    return (
        <div className={style.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${50}%` }}></div>
                <span  className={style.currentExperience} style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </div>
    );
}