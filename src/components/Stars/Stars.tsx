import Star from './Star/Star.tsx';
import './Stars.css';

type StarCountProps = {
    count: number;
};

export const Stars = ({ count = 0 }: StarCountProps) => {
    if (!Number.isInteger(count) || count < 1 || count > 5) return null;

    const starsListItems = Array.from({ length: count }, (_, i) => (
        <li key={i}><Star /></li>
    ));

    return (
        <ul className="card-body-stars">
            {starsListItems}
        </ul>
    );
};

export default Stars;
