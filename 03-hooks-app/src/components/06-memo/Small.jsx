import { memo } from 'react';

const MultipleHooks = ({ value }) => {

    console.log('se renderizo el small');

    return (
        <small>
            { value }
        </small>
    );
};

export default memo(MultipleHooks);