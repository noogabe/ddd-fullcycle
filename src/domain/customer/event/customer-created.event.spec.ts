import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerCreatedEvent from "./customer-created.event";
import EnviaConsoleLog1Handler from "./handler/send-console-log1.handler";
import EnviaConsoleLog2Handler from "./handler/send-console-log2.handler";

describe("customer creation event notification", () => {
    
    it("should notify all events when create customer", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new EnviaConsoleLog1Handler();
        const eventHandler2 = new EnviaConsoleLog2Handler();
        const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
        const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");
        
        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
        
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(2);

        const customerCreatedEvent = new CustomerCreatedEvent({
            id: "1",
            name: "Customer Name", 
        });

        // Quando o notify for executado o EnviaConsoleLog1Handler.handle() e EnviaConsoleLog2Jandler.handle() devem ser chamados
        eventDispatcher.notify(customerCreatedEvent);
        expect(spyEventHandler1).toHaveBeenCalled();
        expect(spyEventHandler2).toHaveBeenCalled();
    });
});