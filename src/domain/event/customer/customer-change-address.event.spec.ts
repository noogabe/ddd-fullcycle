import EventDispatcher from "../@shared/event-dispatcher";
import CustomerChangeAddressEvent from "./customer-change-address.event";
import EnviaConsoleLogHandler from "./handler/send-console-log.handler";

describe("customer change address event notification", () => {

    it("should notify all events when change address customer", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLogHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("CustomerChangeAddressEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["CustomerChangeAddressEvent"][0]).toMatchObject(eventHandler);
        expect(eventDispatcher.getEventHandlers["CustomerChangeAddressEvent"].length).toBe(1);

        const customerChangeAddressEvent = new CustomerChangeAddressEvent({
            id: "1",
            name: "Customer Name",
            address: "Customer Address"
        });

        eventDispatcher.notify(customerChangeAddressEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    });
});