import React from 'react';
import { uiColors } from '@leafygreen-ui/palette';
import MoonLoader from 'react-spinners/MoonLoader';

export default function Loading() {
	return <MoonLoader size="60px" margin="3px" color={uiColors.white} />;
}
