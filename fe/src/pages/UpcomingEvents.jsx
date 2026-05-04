import { Link } from "react-router-dom";
import { useAuthState } from "../context/auth";

export function UpcomingEvents() {
    const { user } = useAuthState();

    return (
        <div className="p-6 px-10 text-vd-text">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-heading font-semibold">Upcoming Events</h1>
                {user && (
                    <Link
                        to="/events/create"
                        className="btn-accent flex items-center gap-2 group hover:scale-105 active:scale-95 transition-transform duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                        New Event
                    </Link>
                )}
            </div>
        </div>
    );
}
