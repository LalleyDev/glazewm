export function focusWorkspace(event, context) {
  const id = event.currentTarget?.id ?? event.target.id;
  context.providers.glazewm.focusWorkspace(id);
}
