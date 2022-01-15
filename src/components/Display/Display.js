import styles from './Display.module.scss';

const Display = ({ time }) => {

    function msToTime(duration) {
        var milliseconds = Math.floor((duration % 1000)),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    return (
        <div className={styles.display}>
            {msToTime(time)}
        </div>
    );
}

export default Display;