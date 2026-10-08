function Team() {
  const members = [
    { name: "Kylian Mbappe", role: "Store Manager", icon: "fa-user-tie" },
    { name: "Lamine Yamal", role: "Book Curator", icon: "fa-book-open" },
    { name: "Jude Bellingham", role: "Customer Support", icon: "fa-headset" },
  ];

  return (
    <main className="container py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Meet Our Team</h1>
        <p className="text-secondary">The people behind our bookstore.</p>
      </div>

      <div className="row g-4 justify-content-center">
        {members.map((member) => (
          <div className="col-md-4" key={member.name}>
            <div className="card text-center h-100 shadow-sm p-4">
              <i className={`fa-solid ${member.icon} team-icon mb-3`} />
              <h4>{member.name}</h4>
              <p className="text-secondary mb-0">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Team;