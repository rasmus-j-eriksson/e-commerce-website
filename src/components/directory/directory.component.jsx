import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


    const Directory = ({sections}) => (
            <div className='directory-menu'>
                {
                    sections.map(({ id, ...otherSectionPropts }) =>
                        <MenuItem key={id} {...otherSectionPropts} />
                    )}
            </div>
    );

    const mapStateToProps = createStructuredSelector({
        sections: selectDirectorySection
    })

export default connect(mapStateToProps)(Directory);