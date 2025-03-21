import Link from 'next/link';

const SecondaryButton = ({ text, clasName = 'btn-style2', url }) => {
	return (
		<Link href={url} rel="noopener" className={clasName}>
			{text}
		</Link>
	);
};

export default SecondaryButton;
