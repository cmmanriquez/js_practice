const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role=tabpanel]'));

function handleTabClick(event) {
	// Hide all tab panels
	tabPanels.forEach(panel => {
		panel.hidden = true;
	});
	// Mark all tabs as unselected
	tabButtons.forEach(tab => {
		tab.setAttribute('aria-selected', false);
	});
	// Mark the clicked tab as selected
	event.currentTarget.setAttribute('aria-selected', true);
	// Find the associated tabPanel and show it!
  const id = event.currentTarget.id;
  // METHOD 1
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // tabPanel.hidden = false;

  // METHOD 2 - find in the array of tabPanels
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
  // It will only work if tabPanels is an array, so we have to change the const and make it an array


};

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
