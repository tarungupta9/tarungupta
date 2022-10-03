import Layout from "@containers/Layout/Layout";
import ListingLayout from "@containers/ListingLayout";
import StackData from "@data/Stack.data";

function Stack() {
	return (
		<ListingLayout>
			<h3 className="sticky top-0 bg-stone-900 py-4 mb-4 text-primary">
				{StackData.name}
			</h3>
			{renderStacklist(StackData.list)}
		</ListingLayout>
	);

	function renderStacklist(items) {
		return items.map(({ Icon, name }, id) => (
			<div key={id} className="flex items-center px-2 mb-4 text-tertiary">
				<Icon size={28} />
				<span className="ml-4">{name}</span>
			</div>
		));
	}
}

Stack.Layout = Layout;

export default Stack;
