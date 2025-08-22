<script lang="ts">
	import { ColorConstants } from '$lib/assets/utils/constants/color_constants';
	import type { IconConstants } from '$lib/assets/utils/constants/icon_constants';

	type Props = {
		text: string;
		icon: IconConstants;
		color: ColorConstants;
	};

	const colored = 'green-500';

	const { text, icon, color }: Props = $props();
	const parClasses = `flex items-center gap-1 self-start bg-${'green-500'} px-2 py-1 text-sm ${'m-10'}`;
</script>

<!-- <p class={parClasses}> -->
<p
	class={[
		'flex',
		'items-center',
		'gap-1',
		'self-start',
		'px-2',
		'py-1',
		'text-sm',
		{
			'bg-green-500': color === ColorConstants.green,
			'bg-amber-500': color === ColorConstants.yellow
		}
	]}
>
	<span class={icon}></span>
	<span>{text}</span>
</p>
