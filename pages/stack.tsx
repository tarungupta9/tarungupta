import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import StackData from "@data/Stack.data";

function Stack() {
	return (
		<ListingLayout>
			<h4 className="sticky top-0 bg-stone-900 py-4 text-primary z-10">
				{StackData.name}
			</h4>
			{renderStacklist(StackData.list)}
		</ListingLayout>
	);

	function renderStacklist(items) {
		return items.map(({ Icon, name }, id) => (
			<div key={id} className="flex items-center p-2 m-2 text-tertiary">
				<Icon size={28} />
				<span className="ml-4">{name}</span>
			</div>
		));
	}
}

Stack.Layout = Layout;

export default Stack;
