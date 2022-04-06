function getAdmins(allEmployees) {
	const isAdmin = new Set();

	for ([employee, job] of allEmployees) {
		if (job == "Admin") {
			isAdmin.add(employee);
		}
	}
	return [...isAdmin];
}

const employees = new Map();
employees.set("Bruno", "Admin");
employees.set("Carlos", "Sales");
employees.set("Lucas", "Admin");
employees.set("Maria", "Sales");

console.log(getAdmins(employees));
